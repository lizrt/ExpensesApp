using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.Cors;
using ExpensesAPI.Data;
using ExpensesAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

namespace ExpensesAPI.Controllers
{
    [ApiController]
    [EnableCors("http://localhost:4200", "*", "*")]
    [Route("api/[controller]/[action]")]
    public class AuthenticationController : ControllerBase
    {
        private readonly AppDbContext _context;
        public AuthenticationController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Login([FromBody] User user)
        {
            if (string.IsNullOrEmpty(user.UserName) || string.IsNullOrEmpty(user.Password))
                return BadRequest("Enter Username or Password");
            try
            {
                var exists = _context.Users.Any(n => n.UserName == user.UserName && n.Password == user.Password);
                if (exists)
                    return Ok(CreateToken(user));
                return BadRequest("wrong credentials");

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Register([FromBody] User user)
        {

            try
            {
                var exists = _context.Users.Any(n => n.UserName == user.UserName);
                if (exists)
                    return BadRequest("User already exists");
                _context.Users.Add(user);
                _context.SaveChanges();
                return Ok(CreateToken(user));

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        private JwtPackage CreateToken(User user)
        {
            var tokenhandler = new JwtSecurityTokenHandler();
            var claims = new ClaimsIdentity(new[]{
                new Claim(ClaimTypes.Email,user.UserName)
            });
            const string secretkey = "your secret key goes here";
            var securitykey = new SymmetricSecurityKey(Encoding.Default.GetBytes(secretkey));
            var signinCredentials = new SigningCredentials(securitykey, SecurityAlgorithms.HmacSha256Signature);
            var token = (JwtSecurityToken)tokenhandler.CreateJwtSecurityToken(
                subject: claims,
                signingCredentials: signinCredentials
            );
            var tokenstring = tokenhandler.WriteToken(token);
            return new JwtPackage()
            {
                UserName = user.UserName,
                Token = tokenstring
            };
        }
        public class JwtPackage
        {
            public string Token { get; set; }
            public string UserName { get; set; }
        }
    }
}