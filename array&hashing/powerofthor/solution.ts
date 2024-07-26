function powerOfThor(lightX: number, lightY: number, initialX: number, initialY: number): string {
    let move: string[] = [];
    while (initialX != lightX || initialY != lightY) {
        let moveX = "";
        let moveY = "";
        if (initialX < lightX) {
            moveX += "E";
            initialX += 1;
        } else if (initialX > lightX) {
            moveX += "W";
            initialX -= 1;
        }
        if (initialY < lightY) {
            moveX += "S";
            initialY += 1;
        } else if (initialY > lightY) {
            moveY += "N";
            initialY -= 1;
        }
        move.push(moveY + moveX);
    }
    return move.join(" ");
}

let [lightX, lightY, initialX, initialY] = [31, 4, 5, 5];
console.log(powerOfThor(lightX, lightY, initialX, initialY));
