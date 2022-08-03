class Celula {
    constructor(estaViva, estaMuerta) {
        this.estaViva = estaViva;
        this.estaMuerta = estaMuerta;
    }

}

function createMatriz() {
    
}

/* Nuevo requerimiento
En esta ocasión  tu implementación deberá estar completamente orientada a objetos:

ABSTRACCIÓN. Probablemente el día de ayer trabajaste tu solución utilizando directamente un vector o matríz. Ahora deberás poner más atención en estructurar tu solución en abstracciones, es decir clases. Tu solución debe aplicar de manera correcta los principios de la programación orientada a objetos.
Los siguientes enlaces te pueden dar algunas pistas de como cumplir con estos requerimientos:

An intro to object-oriented programming in JavaScript: objects, prototypes, and classes
JavaScript — Principios SOLID
Understanding SOLID Principles in JavaScript
NOTA: En esta segunda iteración, debes iniciar tu implementación desde cero, elimina o no utilices el código de la edición anterior. el objetivo no es terminar la implementación del algorimo sino practicar y experimentar.

Requerimientos Funcionales
Addapted from Coding Dojo

The Game of Life is not your typical computer game. It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway.

This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.

This Kata is about calculating the next generation of Conway’s game of life, given any starting position.

You start with a two dimensional grid of cells, where each cell is either alive or dead. In this version of the problem, the grid is finite, and no life can exist off the edges. When calcuating the next generation of the grid, follow these rules:

Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any live cell with two or three live neighbours lives on to the next generation.
Any dead cell with exactly three live neighbours becomes a live cell.
You should write a program that can accept an arbitrary grid of cells, and will output a similar grid showing the next generation.

Clues
The input starting position could be a text file that looks like this:

Generation 1:
4 8
........
....*...
...**...
........
And the output could look like this:

Generation 2:
4 8
........
...**...
...**...
........ */