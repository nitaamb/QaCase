describe ('Hazard Report', () => {
    const data = {
        validUsername: 'valid',
        validPassword: 'valid'
    };

    it('As user, I able to submit Hazard report', async () => {
        await steps(
            'Login sebagai user Mining',
            async () => {
                //script
            },
            'Berhasil menampilkan main page WeMine'
        );
        await steps(
            'Buka menu Hazard',
            async () => {
                //script
            },
            `Berhasil menampilkan halaman Hazard dengan detail :
            - List of Hazard report dengan nomor pelaporan yang berbeda beda
            - Button Crete Report`
        );
        await steps(
            'Pilih Location',
            async () => {
                //script
            },
            'Berhasil memilih location'
        );
        await steps(
            'Pilih Sublocation',
            async () => {
                //script
            },
            'Berhasil memilih sublocation'
        );
        await steps(
            'Pilih Area',
            async () => {
                //script
            },
            'Berhasil memilih area'
        );
        await steps(
            'Masukkan Area Description',
            async () => {
                //script
            },
            'Berhasil menampilkan halaman sukses create hazard dengan detail terdapat hazard entry (nomor pelaporan)'
        );
        await steps(
            'Upload Evidence',
            async () => {
                //script
            },
            'Berhasil mempload evidence'
        );
        await steps(
            'Pilih PIC',
            async () => {
                //script
            },
            'Berhasil memilih pic'
        );
        await steps(
            'Klik button Submit',
            async () => {
                //script
            },
            'Berhasil menampilkan halaman sukses create hazard dengan detail terdapat hazard entry (nomor pelaporan)'
        );
    })
});