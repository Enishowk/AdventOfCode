use std::collections::HashSet;

fn main() {
    let contents = include_str!("./input.txt")
    .lines()
    .map(|s| s.parse::<i32>().unwrap());

    let mut numbers: HashSet<i32> = HashSet::new();
    for elem in contents {
        numbers.insert(elem);
    }

    for number in &numbers {
        let reminder = 2020 - number;
        if numbers.contains(&reminder) {
            println!("{:?}", number * reminder);
            break;
        }
    }
}