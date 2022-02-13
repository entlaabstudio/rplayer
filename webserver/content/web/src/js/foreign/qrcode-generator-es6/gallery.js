import qrcode from './qrcode.js';

const qr = new qrcode(0, 'H');
qr.addData('this is a gallery sample qr code');
qr.make();
document.getElementsByTagName('body')[0].innerHTML = qr.createSvgTag({
	cellColor: (c, r) => 'hsl(' + ((c % 15) * 360 / 15).toFixed(3) + ', 100%, ' + ((r % 15) * 100 / 15).toFixed(3) + '%)',
	obstruction: {
		path: 'obstruction.svg',
		width: 0.222,
		height: 0.333,
	},
});
