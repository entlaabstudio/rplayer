import test from 'tape';
import qrcode from '../qrcode';

test('test svg', (assert) => {
	const qr = new qrcode(0, 'L');
	qr.addData('a');
	qr.make();
	const text = qr.createSvgTag({});
	assert.deepEqual(text.match(/<[^>]+>/g).length, 229, 'QR code element rep length off');
	assert.end();
});

test('test image', (assert) => {
	const qr = new qrcode(0, 'L');
	qr.addData('a');
	qr.make();
	const text = qr.createImgTag();
	assert.deepEqual(text.length, 482, 'QR code image size off');
	assert.end();
});