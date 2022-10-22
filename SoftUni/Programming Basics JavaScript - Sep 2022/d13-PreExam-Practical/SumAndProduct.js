function solve(input) {
    n_number = Number(input[0])
    let number_reach = false
    let count = 0


    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    let num_sum = a + b + c + d
                    let num_mult = a * b * c * d

                    if (num_sum == num_mult && n_number % 10 == 5) {
                        count += 1
                        console.log(`${a}${b}${c}${d}`)
                        n_number = n_number - 1
                        number_reach = true
                        break
                    } else {
                        let division = Math.floor(num_mult / num_sum)
                        if (division == 3 && n_number % 3 == 0) {
                        count += 1
                        console.log(`${d}${c}${b}${a}`)
                        number_reach = true
                        break
                    }
                    }
                if (number_reach) {
                    break
                }

                }
                if (number_reach) {
                    break
                }
            }
            if (number_reach) {
                break
            }
        }
        if (number_reach) {
            break
        }
    }

    if (count == 0) {
        console.log('Nothing found')
    }
}

solve(["214"])