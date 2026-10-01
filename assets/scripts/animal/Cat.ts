import { _decorator } from 'cc';
import { Animal } from './Animal';
const { ccclass, property } = _decorator;

/**
 * Class Cat - Kế thừa từ Animal
 * Ví dụ về polymorphism (đa hình)
 */
@ccclass('Cat')
export class Cat extends Animal {
    
    @property
    private furColor: string = 'Vàng';

    @property
    private livesRemaining: number = 9;

    constructor() {
        super();
        this._name = 'Mèo';
    }

    start() {
        super.start();
        console.log(`${this._name} bắt đầu quan sát xung quanh...`);
    }

    /**
     * Implement phương thức abstract
     */
    public makeSound(): void {
        console.log(`${this._name} kêu: Meo meo! 🐱`);
    }

    /**
     * Override phương thức eat
     */
    public eat(food: string): void {
        if (food === 'cá') {
            this._energy += 20; // Mèo thích cá hơn
            console.log(`${this._name} thích cá lắm! Năng lượng: ${this._energy}`);
        } else {
            super.eat(food);
        }
    }

    /**
     * Override phương thức move
     */
    public move(): void {
        console.log(`${this._name} di chuyển nhẹ nhàng và êm ái...`);
        this._energy -= 3; // Mèo di chuyển tốn ít năng lượng hơn
    }

    /**
     * Phương thức riêng của Cat
     */
    public meow(): void {
        this.makeSound();
        this._energy -= 1;
    }

    public scratch(): void {
        console.log(`${this._name} gãi móng!`);
        this._energy -= 2;
    }

    public climbTree(): void {
        console.log(`${this._name} trèo cây!`);
        this._energy -= 8;
    }

    public jump(): void {
        console.log(`${this._name} nhảy cao!`);
        this._energy -= 5;
    }

    /**
     * Getter và Setter
     */
    public getFurColor(): string {
        return this.furColor;
    }

    public setFurColor(color: string): void {
        this.furColor = color;
    }

    public getLivesRemaining(): number {
        return this.livesRemaining;
    }

    /**
     * Override getInfo
     */
    public getInfo(): string {
        return `${super.getInfo()}, Màu lông: ${this.furColor}, Mạng còn lại: ${this.livesRemaining}`;
    }
}