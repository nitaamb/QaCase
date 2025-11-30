describe ('Equipment Inspection Form', () => {
    const data = {
        validUsername: 'valid',
        validPassword: 'valid'
    };

    it('As user, I am able to view detail Equipment Inspection Form', async () => {
        await steps(
            'Login sebagai user Mining',
            async () => {
                //script
            },
            'Berhasil menampilkan main page WeMine'
        );
        await steps(
            'Buka fitur Equipment Inspection',
            async () => {
                //script
            },
            'Berhasil menampilkan list Equipment Inspection yang sudah diupload sebelumnya dengan button untuk melihat detail pada masing-masing list'
        );
        await steps(
            'Pilih salah satu liat yang muncul dan Klik button untuk melihat detail form',
            async () => {
                //script
            },
            'Berhasil menampilkan detail Equipment Inspection Form dengan detail sesuai dengan data yang telah diupload'
        );
    })
});