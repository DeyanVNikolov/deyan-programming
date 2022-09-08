using System;

namespace YardGreening
{
    class Program
    {
        static void Main(string[] args)
        {
            //static variables
            double discount = 0.18;
            double price_sq = 7.61;

            //input variables
            double sq_m = double.Parse(Console.ReadLine());


            //calcualte
            double total_sq = sq_m * price_sq;
            double dsc_price = total_sq * discount;
            double final = total_sq - dsc_price;

            Console.WriteLine($"The final price is: {final} lv.");
            Console.WriteLine($"The discount is: {dsc_price} lv.");



        }
    }
}
