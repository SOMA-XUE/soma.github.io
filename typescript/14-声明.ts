// 声明文件
declare const $:(selector: string) => {
    click(): void;
    width(length:number): void;
}

$('.main').click();
$('.mian').width(1);