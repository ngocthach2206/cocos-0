import { _decorator, Component, Node } from 'cc';
import { Animal } from './Animal';
const { ccclass, property } = _decorator;

/**
 * Class AnimalManager - Quản lý tất cả các động vật
 * Sử dụng Singleton Pattern để đảm bảo chỉ có một instance duy nhất
 */

@ccclass('AnimalManager')
export class AnimalManager extends Component {

    @property([Animal])
    //Danh sách các động vật trong game
    public animals: Animal[] = [];

    protected start(): void {
        let animalCount = this.getAnimalCount();
        console.log("Animal Count: " + animalCount);

        this.makeAllAnimalsSound(); //Cho tất cả động vật phát ra tiếng kêu
    }

    /**
     * Lấy số lượng động vật
     */

    public getAnimalCount(): number {
        return this.animals.length;
    }

    /**
     * Cho tất cả động vật phát ra tiếng kếu
     */
    public makeAllAnimalsSound(): void {
        console.log("Tất cả động vật đang phát ra tiếng kêu:");
        this.animals.forEach((animal, index) => {
            setTimeout(() => {
                animal.makeSound();
            }, index * 1000); // Delay 1 giây giữa các tiếng kêu
        });
    }
}


