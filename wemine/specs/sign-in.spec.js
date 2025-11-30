describe ('Sign In', () => {
    const data = {
        validUsername: 'valid',
        validPassword: 'valid'
    };

    it('As user, I am able to Sign In', async () => {
        await steps(
            'Buka website WeMine',
            async () => {
                //script
            },
            'Berhasil menampilkan halaman login WeMine'
        );
        await steps(
            'Masukkan username pada field username',
            async () => {
                //script
            },
            'Berhasil memasukkan username'
        );
        await steps(
            'Klik tombol Login',
            async () => {
                //script
            },
            'Berhasil menampilkan halaman Microsoft Login'
        );
        await steps(
            'Masukkan password',
            async () => {
                //script
            },
            'Berhasil memasukkan password'
        );
        await steps(
            'Klik button Next',
            async () => {
                //script
            },
            `"Berhasil menampilkan halaman sukses login dengan detail
            - alert perintah melakukan restart aplikasi`
        );
        await steps(
            'Refresh halaman WeMine',
            async () => {
                //script
            },
            'Berhasil menampilkan halaman utama WeMine'
        );
    })
});