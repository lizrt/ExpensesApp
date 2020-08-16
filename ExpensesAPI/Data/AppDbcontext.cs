using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ExpensesAPI.Models;

namespace ExpensesAPI.Data
{
    public class AppDbContext : DbContext
    {
         public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }
        public AppDbContext(){
            
        }
        public DbSet<ExpenseEntry> ExpenseEntries { get; set; }
         public DbSet<User> Users { get; set; }
        // protected override void OnConfiguring(DbContextOptionsBuilder options)
        // =>options.UseSqlite("Datasource=Expenses.db");
         protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ExpenseEntry>().HasData(new ExpenseEntry {Id = 1, 
            Description = "test",IsExpense=true,Value=0.98});
            modelBuilder.Entity<ExpenseEntry>()
    .Property(p => p.Id)
    .ValueGeneratedOnAdd();
        }
    }
}