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
        console.log("=== Bắt đầu chương trình ===");
        // this.viDuToanTuSoHoc();
        // this.viDuToanTuSoSanh();
        // this.viDuToanTuGan();
        // this.viDuApDungGame();
        this.checkCat(100, 10);
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

        c = this.congHaiSo(1, 10); //Gọi hàm cộng hai số
        console.log("1 + 10 = " + c); //11

        c = this.tinhToanPhucTap(5, 3); //Gọi hàm tính toán phức tạp
        console.log("Kết quả tính toán phức tạp: " + c); //Kết quả cuối cùng
    }

    congHaiSo(a: number, b: number): number {
        return a + b;
    }

    //Hàm thực hiện chuỗi các tính toán phức tạp
    tinhToanPhucTap(a: number, b: number): number {
        //Bước 1: Cộng hai số a và b
        let buoc1 = a + b;
        console.log("Bước 1 (a + b): " + buoc1);
        
        //Bước 2: Trừ đi tích của a và b
        let buoc2 = buoc1 - (a * b);
        console.log("Bước 2 (Bước 1 - (a * b)): " + buoc2);

        //Bước 3: Cộng với bình phương của a
        let buoc3 = buoc2 + (a * a);
        console.log("Bước 3 (Bước 2 + (a * a)): " + buoc3);

        //Bước 4: Trừ đi bình phương của b
        let buoc4 = buoc3 - (b * b);
        console.log("Bước 4 (Bước 3 - (b * b)): " + buoc4);

        //Bước 5: Cộng với tổng của a và b nhân với 2
        let buoc5 = buoc4 + ((a + b) * 2);
        console.log("Bước 5 (Bước 4 + ((a + b) * 2)): " + buoc5);

        //Bước 6: Trừ đi hiệu của a và b
        let buoc6 = buoc5 - (a - b);
        console.log("Bước 6 (Bước 5 - (a - b)): " + buoc6);

        //Bước 7: Cộng với trung bình của a và b
        let buoc7 = buoc6 + ((a + b) / 2);
        console.log("Bước 7 (Bước 6 + ((a + b) / 2)): " + buoc7);

        //Bước 8: Kết quả cuối cùng trừ đi 10
        let ketQua = buoc7 - 10;
        console.log("Kết quả cuối cùng (Bước 7 - 10): " + ketQua);

        return ketQua;
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

    //VÍ DỤ VỀ IF VÀ FOR

    //Ví dụ về IF: Kiểm tra mèo sống hay chết dựa vào máu
    checkCat(currentHealth : number, damage : number) {
        console.log("=== Check Cat ===");
        console.log("Máu hiện tại: " + currentHealth);
        console.log("Sát thương nhận vào: " + damage);

        //Trừ máu
        let healthAfterDamage = currentHealth - damage;
        console.log("Máu sau khi bị tấn công: " + healthAfterDamage);

        //Kiểm tra mèo còn sống không
        if (healthAfterDamage > 0) {
            console.log("Mèo còn sống!");
            this.isCatAlive = true;
        } else {
            console.log("Mèo đã chết!");
            this.isCatAlive = false;
        }

        return healthAfterDamage;
    }

    //Ví dụ về FOR
    countToTen() {
        console.log("=== Đếm từ 1 đến 10 ===");
        for (let i = 1; i <= 10; i++) {
            console.log("số thứ " + i);
        }
    }

    //Ví dụ về FOR với mảng
    printFruits() {
        console.log("=== In ra danh sách trái cây ===");
        const fruits = ["Táo", "Cam", "Chuối", "Dưa hấu", "Nho"];

        for (let i = 0; i < fruits.length; i++) {
            console.log("Trái cây thứ " + (i + 1) + ": " + fruits[i]);
        }
    }
}


