test.describe ('Sign In', () => {

    test('As user, I am able to Sign In', async () => {
        await allureHelper.steps(
            page,
            'Buka website WeMineOffice',
            async () => {
                //script
            },
            'Berhasil menampilkan halaman login WeMineOffice'
        );
        await allureHelper.steps(
            page,
            'Masukkan username pada field username',
            async () => {
                //script
            },
            'Berhasil memasukkan username'
        );
        await allureHelper.steps(
            page,
            'Klik tombol Login',
            async () => {
                //script
            },
            'Berhasil menampilkan halaman Microsoft Login'
        );
        await allureHelper.steps(
            page,
            'Masukkan password',
            async () => {
                //script
            },
            'Berhasil memasukkan password'
        );
        await allureHelper.steps(
            page,
            'Klik button Next',
            async () => {
                //script
            },
            `"Berhasil menampilkan halaman sukses login dengan detail
            - alert perintah melakukan restart aplikasi`
        );
        await allureHelper.steps(
            page,
            'Refresh halaman WeMineOffice',
            async () => {
                //script
            },
            'Berhasil menampilkan halaman utama WeMineOffice'
        );
    })
});