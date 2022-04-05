package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func parseToInt(body []byte) (data []int) {
	for _, l := range strings.Split(string(body), "\n") {
		intVar, _ := strconv.Atoi(l)
		data = append(data, intVar)
	}

	return data
}

func main() {
	body, err := os.ReadFile("./input.txt")
	check(err)
	inputs := parseToInt(body)

	count := 0
	for i, num := range inputs {
		if i > 0 {
			if num > inputs[i-1] {
				count++
			}
		}
	}

	fmt.Println(count)
}
