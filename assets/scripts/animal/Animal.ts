import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


/**
 * Class Animal cơ bản - Lớp cha cho tất cả động vật
 * Đây là ví dụ về Abstract class trong TypeScript
 */

@ccclass('Animal')
export abstract class Animal extends Component {

    @property
    protected _name: string = " ";

    @property
    protected _age: number = 0;

    @property
    protected _energy: number = 100;

    /**
     * Constructor - Hàm khởi tạo
     */

    constructor() {
        super();
    }

    /**
     * Phương thức khởi tạo khi component được load
     */

    start() {

    }

    /**
     * Getter và setter - cách đóng gói dữ liệu
     */

    public getName(): string {
        return this._name;
    }

    public setName(name: string): void {
        this._name = name;
    }

    public getAge(): number {
        return this._age;
    }

    public setAge(age: number): void {
        this._age = age;
    }

    public getEnergy(): number {
        return this._energy;
    }

    public setEnergy(energy: number): void {
        this._energy = energy;
    }

    /**
     * Phương thức abstract - các class con bắt buộc phải implement
     */

    public abstract makeSound(): void;

    /**
     * Phương thức có thể overdrive - có thể implemention mặc định
     */

    public eat(food: string): void {
        this._energy += 10;
        console.log(`${this._name} đang ăn ${food}. Năng lượng hiện tại: ${this._energy}`);
    }

    public sleep(): void {
        this._energy += 20;
        console.log(`${this._name} đang ngủ. Năng lượng hiện tại: ${this._energy}`);
    }

    public move(): void {
        this._energy -= 5;
        console.log(`${this._name} đang di chuyển. Năng lượng hiện tại: ${this._energy}`);
    }

    /**
     * Phương thức hiển thị thông tin
     */

    public getInfo(): void {
        console.log(`Tên: ${this._name}, Tuổi: ${this._age}, Năng lượng: ${this._energy}`);
    }
}


