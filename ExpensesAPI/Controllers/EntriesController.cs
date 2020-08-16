using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.Cors;
using ExpensesAPI.Data;
using ExpensesAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ExpensesAPI.Controllers
{
    [ApiController]
    // [Route("api/[controller]/")]
    [Route("api/[controller]/[action]")]
    public class EntriesController : ControllerBase
    {
        private readonly AppDbContext _context;


        private readonly ILogger<WeatherForecastController> _logger;

        public EntriesController(ILogger<WeatherForecastController> logger, AppDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        // [EnableCors]
        [EnableCors("http://localhost:4200", "*", "*")]
        // [Route("api/Entries/GetEntries")]
        public IActionResult GetEntries()
        {
            try
            {

                var entries = _context.ExpenseEntries.ToList();
                return Ok(entries);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        // [EnableCors]
        [EnableCors("https://localhost:4200", "*", "*")]
        // [Route("api/Entries/GetEntries")]
        public IActionResult PostEntry([FromBody] ExpenseEntry entry)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            try
            {

                _context.ExpenseEntries.Add(entry);
                _context.SaveChanges();
                return Ok("Entry Added");

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

         [HttpDelete("{Id}")]
        [EnableCors("https://localhost:4200", "*", "*")]
        public IActionResult DeleteEntry(int Id)
        {
          
            try
            {

                 var Entry = _context.ExpenseEntries.FirstOrDefault(de => de.Id == Id);
                if (Entry == null)
                    return NotFound();
               _context.ExpenseEntries.Remove(Entry);

                _context.SaveChanges();
                return Ok("Entry Deleted");

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("{Id}")]
[EnableCors("https://localhost:4200", "*", "*")]
        public IActionResult GetEntry(int Id)
        {
          
            try
            {

                 var Entry = _context.ExpenseEntries.FirstOrDefault(de => de.Id == Id);
                if (Entry == null)
                    return NotFound();
              
                return Ok(Entry);

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{Id}")]
        // [EnableCors]
        [EnableCors("https://localhost:4200", "*", "*")]
        // [Route("api/Entries/GetEntries")]
        public IActionResult UpdateEntry(int Id, [FromBody] ExpenseEntry entry)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            if (Id != entry.Id)
                return BadRequest();
            try
            {
                var oldEntry = _context.ExpenseEntries.FirstOrDefault(de => de.Id == Id);
                if (oldEntry == null)
                    return NotFound();
                oldEntry.Description = entry.Description;
                oldEntry.Value = entry.Value;
                oldEntry.IsExpense = entry.IsExpense;

                _context.SaveChanges();
                return Ok("Entry Updated");

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
