package main

import (
	"bufio"
	"fmt"
	"log"
	"math"
	"os"
	"sort"
	"strconv"
	"strings"
)

func main() {
	file, err := os.Open("./input.txt")
	if err != nil {
		log.Fatalf("Failed to open file: %v", err)
	}
	defer file.Close()

	var array1 []int
	var array2 []int
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		parts := strings.SplitN(line, "   ", 2)

		numb1, _ := strconv.Atoi(parts[0])
		array1 = append(array1, numb1)
		numb2, _ := strconv.Atoi(parts[1])
		array2 = append(array2, numb2)
	}

	part1(array1, array2)
	part2(array1, array2)
}

func part1(array1, array2 []int) {
	sort.Ints(array1)
	sort.Ints(array2)

	var sums int
	for i := 0; i < len(array1); i++ {
		sums += int(math.Abs(float64(array1[i] - array2[i])))
	}

	fmt.Println("part1:", sums)
}

func part2(array1, array2 []int) {
	var sums int
	for _, num1 := range array1 {
		count := 0
		for _, num2 := range array2 {
			if num1 == num2 {
				count++
			}
		}
		sums += num1 * count
	}

	fmt.Println("part2:", sums)
}
