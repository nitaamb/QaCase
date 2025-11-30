test.describe ('Equipment Inspection Form', () => {

    test('As user, I am able to create Equipment Inspection Form', async () => {
        await allureHelper.steps(
            page,
            'Login sebagai user Mining',
            async () => {
                //script
            },
            'Berhasil menampilkan main page WeMine'
        );
        await allureHelper.steps(
            page,
            'Buka fitur Equipment Inspection',
            async () => {
                //script
            },
            `Berhasil menampilkan halaman Equipment Inspection dengan detail :
            - Table list Equipment Inspection dengan detail kolom :
            1. No
            2. Form Code
            3. Creator
            4. Created Date
            5. Modified Date
            6. Button pensil untuk melakukan edit
            7. Button '>' untuk membuka detail
            8. Button upload untuk generate form code`
        );
        await allureHelper.steps(
            page,
            'Klik button Buat Form',
            async () => {
                //script
            },
            `Berhasil menampilkan halaman Equipment Inspection form dengan detail :
            - Text field
            - Date field
            - Dropdown field (input select)
            - Radio Button
            - Upload Evidence (Image Picker)
            - Button Simpan`
        );
    })
});