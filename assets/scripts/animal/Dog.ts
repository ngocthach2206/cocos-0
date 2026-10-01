import { _decorator, Component, Node } from 'cc';
import { Animal } from './Animal';
const { ccclass, property } = _decorator;

/**
 * Class Dog - Lớp con kế thừa từ lớp Animal
 * Đây là ví dụ về kế thừa (inheritance) và method overdriding
 */

@ccclass('Dog')
export class Dog extends Animal {

    @property
    private isTranined: boolean = false;

    /**
     * Constructor với tham số
     */

    constructor() {
        super(); //Gọi constructor của lớp cha
        this._name = "Chó"; //Gán giá trị cho thuộc tính _name của lớp cha
    }

    /**
     * Override phương thức start()
     */

    start() {
        super.start(); //Gọi phương thức start() của lớp cha
        console.log(`${this._name} đã sẵn sàng`);
    }

    /**
     * Implement phương thức abstract từ class cha
     */

    public makeSound(): void {
        console.log(`${this._name} sủa: Gâu Gâu!`);
    }

    /**
     * Override phương thức eat() với hành vi riêng
     */

    public eat(food: string): void {
        super.eat(food); //Gọi phương thức eat() của lớp cha
        console.log(`${this._name} vẫy đuôi vui vẻ!`);
    }

    /**
     * Phương thức riêng của Dog
     */

    public bark(): void {
        this.makeSound(); //Gọi phương thức makeSound() của lớp Dog
        this._energy -= 2; //Giảm năng lượng khi sủa
    }

    public fetch(): void {
        if (this.isTranined) {
            console.log(`${this._name} chạy đi lấy bóng!`);
            this._energy -= 10; //Giảm năng lượng khi chạy
        } else {
            console.log(`${this._name} chưa được huấn luyện!`);
            this._energy -= 5; //Giảm năng lượng ít hơn khi không được huấn luyện
        }
    }

    public train(): void {
        this.isTranined = true;
        console.log(`${this._name} đã được huấn luyện!`);
    }

    /**
     * Override phương thức getInfo() để hiển thị thông tin chi tiết
     */

    public getInfo(): string {
        return `${super.getInfo()}, Đã huấn luyện: ${this.isTranined ? "Có" : "Không"}`;
    }
}


