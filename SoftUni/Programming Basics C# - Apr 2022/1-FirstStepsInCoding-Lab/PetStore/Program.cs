using System;

namespace PetStore
{
    class Program
    {
        static void Main(string[] args)
        {
            double dog_price = 2.50;
            int cat_price = 4;

            int dog_food = int.Parse(Console.ReadLine());
            int cat_food = int.Parse(Console.ReadLine());

            double dog = dog_price * dog_food;
            double cat = cat_price * cat_food;

            double cost = dog + cat;

            Console.WriteLine($"{cost} lv.");
        }
    }
}
