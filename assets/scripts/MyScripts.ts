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
    isAlive: boolean = true;
    isDead: boolean = false;

    // 4. NODE
    @property(Node)
    enemy: Node = null;

    // 5. ARRAY
    @property([Node])
    items: Node[] = [];

    start() {
        console.log("Điểm: " + this.score);
        console.log("Tên: " + this.playerName);
        console.log("Còn sống: " + this.isAlive);
    }

    update(deltaTime: number) {
        
    }
}


