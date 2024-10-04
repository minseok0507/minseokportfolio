import "./globals.css";

export const metadata = {
    title: "정민석 포트폴리오",
    description: "Minseok Jeong Portfolio",
};

export default function RootLayout({children}) {
    return (
        <html lang="ko">
        <body
        >
        <link rel="icon" href="/favicon.ico" sizes="any"/>
        {children}
        </body>
        </html>
    );
}
