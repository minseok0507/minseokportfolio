import "./globals.css";

export const metadata = {
    title: "정민석 포트폴리오",
    description: "Minseok Jeong Portfolio",
};

export default function RootLayout({children}) {
    return (
        <html lang="ko" className="">
        <body
        >
        {children}
        </body>
        </html>
    );
}
