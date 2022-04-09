using System;

namespace ArchitectProjects
{
    class Program
    {
        static void Main(string[] args)
        {
            string name = Console.ReadLine();
            int projects = int.Parse(Console.ReadLine());
            int needed_hours = projects * 3;

            Console.WriteLine($"The architect {name} will need {needed_hours} hours to complete {projects} project/s.");
        }
    }
}
