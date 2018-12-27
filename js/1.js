var a = 1;
switch (a) {
    case 2:
        console.log(2)
        break;
    case 1, 2, 3: // 这里case是对比几呢？
        console.log(1)
        break;
    default:
        break;
}