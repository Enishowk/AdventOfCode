package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

func convertStringsToInts(stringSlice []string) []int {
	intSlice := make([]int, len(stringSlice))
	for i, str := range stringSlice {
		num, _ := strconv.Atoi(str)
		intSlice[i] = num
	}
	return intSlice
}

func main() {
	file, err := os.Open("./input.txt")
	if err != nil {
		log.Fatalf("Failed to open file: %v", err)
	}
	defer file.Close()

	var numbers [][]int
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		parts := strings.Split(line, " ")
		intNumbers := convertStringsToInts(parts)
		numbers = append(numbers, intNumbers)
	}

	part1(numbers)
	part2(numbers)
}

func isValidRow(numbers []int) bool {
	if len(numbers) < 2 {
		return true
	}

	var mode string
	if numbers[0] < numbers[1] {
		mode = "ASC"
	} else {
		mode = "DESC"
	}

	for idx, numb := range numbers {
		if mode == "ASC" {
			if len(numbers) > idx+1 && (numbers[idx+1]-numb <= 0 || numbers[idx+1]-numb > 3) {
				return false
			}
		}

		if mode == "DESC" {
			if len(numbers) > idx+1 && (numbers[idx+1]-numb >= 0 || numbers[idx+1]-numb < -3) {
				return false
			}
		}
	}

	return true

}

func canBeValidRow(row []int) bool {
	for i := range row {
		newRow := make([]int, 0, len(row)-1)
		newRow = append(newRow, row[:i]...)
		newRow = append(newRow, row[i+1:]...)

		if isValidRow(newRow) {
			return true
		}
	}
	return false
}

func part1(numbers [][]int) {
	var count int
	for _, row := range numbers {
		if isValidRow(row) {
			count++
		}
	}

	fmt.Println("Part1:", count)
}

func part2(numbers [][]int) {
	var count int
	for _, row := range numbers {
		if isValidRow(row) || canBeValidRow(row) {
			count++
		}
	}

	fmt.Println("Part2:", count)
}
