import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MyScripts')
export class MyScripts extends Component {
    
    // 1. NUMBER
    @property
    score: number = 0;
    bossCount: number = 100;
    playerHP: number = 1000;
    //Biến

    // 2. STRING
    @property
    playerName: string = "Dừa Chơi Game";
    myNumber: string = "100";
    
    // 3. BOOLEAN
    @property
    isCatAlive: boolean = true;

    // 4. NODE
    @property(Node)
    enemy: Node = null;

    // 5. ARRAY
    @property([Node])
    items: Node[] = [];

    start() {
        this.viDuToanTuSoHoc();
        this.viDuToanTuSoSanh();
        this.viDuToanTuGan();
        this.viDuApDungGame();
    }

    viDuToanTuSoHoc() {
        // 1. TOÁN TỬ SỐ HỌC
        let a: number = 10;
        let b: number = 3;
        let c: number = 0;

        console.log(" === Toán tử số học ===");

        c = a + b; //Phép cộng
        console.log("a + b = " + c); //13

        c = a - b; //Phép trừ
        console.log("a - b = " + c); //7

        c = a * b; //Phép nhân
        console.log("a * b = " + c); //30

        c = a / b; //Phép chia
        console.log("a / b = " + c); //3.3333333333333335

        c = a % b; //Phép chia lấy dư
        console.log("a % b = " + c); //1
    }

    viDuToanTuSoSanh() {
        // 2. TOÁN TỬ SO SÁNH
        let x: number = 5;
        let y: number = 10;
        let z: boolean = false;

        console.log(" === Toán tử so sánh ===");

        z = x > y; //Lớn hơn
        console.log("x > y = " + z); // false

        z = x < y; //Nhỏ hơn
        console.log("x < y = " + z); // true

        z = x >= 5; //Lớn hơn hoặc bằng
        console.log("x >= 5 = " + z); // true

        z = x <= y; //Nhỏ hơn hoặc bằng
        console.log("x <= y = " + z); // true

        z = x == 5; //Bằng
        console.log("x == 5 = " + z); // true

        z = x != y; //Khác
        console.log("x != y = " + z); // true
    }

    viDuToanTuGan() {
        // 3. TOÁN TỬ GÁN
        let score: number = 100;

        console.log(" === Toán tử gán ===");

        console.log("Điểm ban đầu: " + score); //100

        score += 10; //score = score + 10
        console.log("Điểm sau khi cộng: " + score); //110

        score -= 5; //score = score - 5
        console.log("Điểm sau khi trừ: " + score); //105

        score *= 2; //score = score * 2
        console.log("Điểm sau khi nhân: " + score); //210

        score /= 3; //score = score / 3
        console.log("Điểm sau khi chia: " + score); //70

        score++; //score = score + 1
        console.log("Điểm sau khi tăng: " + score); //71

        score--; //score = score - 1
        console.log("Điểm sau khi giảm: " + score); //70
    }

    viDuApDungGame() {
        // ÁP DỤNG VÀO GAME
        console.log(" === Áp dụng vào game ===");

        this.playerHP = this.playerHP - 50; //Mất 50 máu
        console.log("Máu còn lại: " + this.playerHP);

        if (this.playerHP <= 0) {
            this.isCatAlive = false; //Chết
        }else {
            this.isCatAlive = true; //Còn sống
        }

        this.score += 100; //Điểm cộng thêm 100
        console.log("Điểm hiện tại: " + this.score);

        this.bossCount--; //Giảm số lượng boss đi 1
        console.log("Số lượng boss còn lại: " + this.bossCount);
    }

    update(deltaTime: number) {
        
    }
}


