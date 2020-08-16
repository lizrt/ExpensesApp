using ExpensesAPI.Data;
using ExpensesAPI.Models;
using System;
using System.Linq;

namespace ExpensesAPI.Data
{
    public static class DbInitializer
    {
        public static void Initialize(AppDbContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.ExpenseEntries.Any())
            {
                return;   // DB has been seeded
            }

            var ExpenseEntries = new ExpenseEntry[]
            {
                new ExpenseEntry{Id=1, 
            Description = "test",IsExpense=true,Value=0.98}
            };

            context.ExpenseEntries.AddRange(ExpenseEntries);
            context.SaveChanges();
        }
    }
}