module.exports = {
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            dropShadow: {
                '3xl': '0 35px 35px rgb(255, 255, 255)',
            }
        },
        fontFamily: {
            Poppins: ["Poppins", "sans-serif"]
        },
        container: {
            center: true,
            screens: {
                "xs": "400px",
                sm: "600px",
                md: "920px",
                lg: "1124px",
                xl: "1124px",
                "2xl": "1124px",
            }
        }
    },
    variants: {
        animation: ['responsive', 'hover', 'focus'],
        extend: {},
    },
    plugins: [],
    content: ['./src/components/navigation/*.js']
}