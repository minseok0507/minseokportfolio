'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, FileText, Github } from "lucide-react"

export function ContactMeJsx() {
  return (
    (<Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Contact Me</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <Phone className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm">+82 010-4741-6090</span>
        </div>
        <div className="flex items-center space-x-4">
          <Mail className="h-5 w-5 text-muted-foreground" />
          <a
            href="mailto:jms8928@naver.com"
            className="text-sm text-primary hover:underline">
            jms8928@naver.com
          </a>
        </div>
        <Button variant="outline" className="w-full justify-start space-x-2" onClick={()=>{window.open("https://docs.google.com/document/d/1w1CIQ4x5h_LuBeZBBV1kj2FMg89_GmZl0_3u_bNm_nQ/edit?usp=sharing", "_blank")}}>
          <FileText className="h-5 w-5" />
          <span>View Resume</span>
        </Button>
        <Button variant="outline" className="w-full justify-start space-x-2" onClick={()=>{window.open("https://github.com/minseok0507/", "_blank")}}>
          <Github className="h-5 w-5" />
          <span>GitHub</span>
        </Button>
      </CardContent>
    </Card>)
  );
}