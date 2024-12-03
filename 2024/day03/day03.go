package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"regexp"
	"strconv"
	"strings"
)

func main() {
	part1()
	part2()
}

func part1() {
	file, err := os.Open("./input.txt")
	if err != nil {
		log.Fatalf("Failed to open file: %v", err)
	}
	defer file.Close()
	scanner := bufio.NewScanner(file)
	count := 0
	for scanner.Scan() {
		line := scanner.Text()
		count += countNumbers(line)
	}
	fmt.Println("Part1:", count)
}

func part2() {
	file, err := os.Open("./input.txt")
	if err != nil {
		log.Fatalf("Failed to open file: %v", err)
	}
	defer file.Close()
	scanner := bufio.NewScanner(file)

	count := 0
	for scanner.Scan() {
		line := scanner.Text()
		pattern := `don't\(\).*?(do\(\)|$)`
		re := regexp.MustCompile(pattern)
		matches := re.FindAllStringSubmatch(line, -1)

		for _, match := range matches {
			partToRemove := match[0]
			line = strings.ReplaceAll(line, partToRemove, "")
		}
		count += countNumbers(line)

	}
	fmt.Println("Part2:", count)
}

func countNumbers(line string) int {
	count := 0
	pattern := `mul\(\d{1,3},\d{1,3}\)`
	re := regexp.MustCompile(pattern)
	matches := re.FindAllStringSubmatch(line, -1)

	for _, match := range matches {
		mul := match[0]
		pattern := `\d+,\d+`
		re := regexp.MustCompile(pattern)
		matches := re.FindAllStringSubmatch(mul, -1)

		for _, numbers := range matches {
			line := numbers[0]
			parts := strings.SplitN(line, ",", 2)
			numb1, _ := strconv.Atoi(parts[0])
			numb2, _ := strconv.Atoi(parts[1])
			count += numb1 * numb2
		}
	}

	return count
}
