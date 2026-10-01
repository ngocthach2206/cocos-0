import { _decorator } from 'cc';
import { Animal } from './Animal';
const { ccclass, property } = _decorator;

/**
 * Class Bird - Kế thừa từ Animal
 * Ví dụ về thêm tính năng mới cho class con
 */
@ccclass('Bird')
export class Bird extends Animal {
    
    @property
    private canFly: boolean = true;

    @property
    private wingSpan: number = 30; // Sải cánh (cm)

    @property
    private isFlying: boolean = false;

    constructor() {
        super();
        this.nameAnimal = 'Chim';
    }

    start() {
        super.start();
        console.log(`${this.nameAnimal} đang đậu trên cành cây...`);
    }

    /**
     * Implement phương thức abstract
     */
    public makeSound(): void {
        console.log(`${this.nameAnimal} kêu: Chíp chíp!`);
    }

    /**
     * Override phương thức eat
     */
    public eat(food: string): void {
        if (food === 'hạt') {
            this._energy += 15;
            console.log(`${this.nameAnimal} mổ hạt. Năng lượng: ${this._energy}`);
        } else {
            super.eat(food);
        }
    }

    /**
     * Override phương thức move
     */
    public move(): void {
        if (this.isFlying) {
            console.log(`${this.nameAnimal} đang bay trên không...`);
            this._energy -= 7;
        } else {
            console.log(`${this.nameAnimal} đang nhảy trên mặt đất...`);
            this._energy -= 4;
        }
    }

    /**
     * Phương thức riêng của Bird
     */
    public fly(): void {
        if (this.canFly && this._energy >= 10) {
            this.isFlying = true;
            console.log(`${this.nameAnimal} cất cánh bay!`);
            this._energy -= 10;
        } else if (!this.canFly) {
            console.log(`${this.nameAnimal} không thể bay!`);
        } else {
            console.log(`${this.nameAnimal} quá mệt để bay!`);
        }
    }

    public land(): void {
        if (this.isFlying) {
            this.isFlying = false;
            console.log(`${this.nameAnimal} hạ cánh xuống đất!`);
        } else {
            console.log(`${this.nameAnimal} đã ở dưới đất rồi!`);
        }
    }

    public sing(): void {
        console.log(`${this.nameAnimal} đang hót!`);
        this.makeSound();
        this._energy -= 3;
    }

    public buildNest(): void {
        console.log(`${this.nameAnimal} đang xây tổ!`);
        this._energy -= 15;
    }

    /**
     * Getter và Setter
     */
    public getCanFly(): boolean {
        return this.canFly;
    }

    public setCanFly(canFly: boolean): void {
        this.canFly = canFly;
    }

    /**
     * Override getInfo
     */
    public getInfo(): string {
        return `${super.getInfo()}, Sải cánh: ${this.wingSpan}cm, Có thể bay: ${this.canFly ? 'Có' : 'Không'}, Đang bay: ${this.isFlying ? 'Có' : 'Không'}`;
    }
}