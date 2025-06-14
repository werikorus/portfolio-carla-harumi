import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Palette, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl">Carla Harumi</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              Sobre
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">
              Projetos
            </Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80">
              Habilidades
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contato
            </Link>
          </nav>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              CV
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 py-24 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Carla Harumi"
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Olá, eu sou{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Carla Harumi
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Desenvolvedora Full Stack apaixonada por criar experiências digitais incríveis. Especializada em React,
              Next.js e tecnologias modernas.
            </p>
          </div>
          <div className="flex space-x-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Mail className="mr-2 h-4 w-4" />
              Entre em Contato
            </Button>
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre Mim</h2>
            <p className="mt-4 text-gray-500 md:text-lg">Conheça um pouco mais sobre minha jornada e experiência</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Sou uma desenvolvedora apaixonada por tecnologia com mais de 3 anos de experiência criando aplicações
                web modernas e responsivas. Minha jornada começou com curiosidade sobre como os sites funcionam e
                evoluiu para uma carreira dedicada ao desenvolvimento de soluções inovadoras.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Especializo-me em desenvolvimento front-end com React e Next.js, mas também tenho experiência sólida em
                back-end com Node.js e bancos de dados. Adoro trabalhar em equipe e estou sempre buscando aprender novas
                tecnologias e melhores práticas.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Carla trabalhando"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meus Projetos</h2>
            <p className="mt-4 text-gray-500 md:text-lg">Alguns dos projetos que desenvolvi recentemente</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500"></div>
              <CardHeader>
                <CardTitle>E-commerce Platform</CardTitle>
                <CardDescription>
                  Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Stripe</Badge>
                  <Badge variant="outline">Prisma</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-500"></div>
              <CardHeader>
                <CardTitle>Task Management App</CardTitle>
                <CardDescription>
                  Aplicativo de gerenciamento de tarefas com drag & drop e colaboração em tempo real.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Socket.io</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-pink-400 to-red-500"></div>
              <CardHeader>
                <CardTitle>Weather Dashboard</CardTitle>
                <CardDescription>
                  Dashboard interativo de clima com previsões detalhadas e mapas interativos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">Chart.js</Badge>
                  <Badge variant="outline">API</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Habilidades</h2>
            <p className="mt-4 text-gray-500 md:text-lg">Tecnologias e ferramentas que domino</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center p-6">
              <CardHeader>
                <Code className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <CardTitle>Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Vue.js</Badge>
                  <Badge>SASS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Smartphone className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <CardTitle>Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Prisma</Badge>
                  <Badge>GraphQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <Palette className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                <CardTitle>Ferramentas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge>Git</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Vercel</Badge>
                  <Badge>AWS</Badge>
                  <Badge>Figma</Badge>
                  <Badge>Jest</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Vamos Conversar?</h2>
            <p className="mt-4 text-gray-500 md:text-lg">
              Estou sempre aberta a novas oportunidades e projetos interessantes
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Entre em Contato</h3>
                    <p className="text-gray-600">
                      Tem algum projeto em mente? Vamos conversar sobre como posso ajudar!
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gray-400" />
                        <span>carla.harumi@email.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Linkedin className="w-5 h-5 text-gray-400" />
                        <span>linkedin.com/in/carlaharumi</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Github className="w-5 h-5 text-gray-400" />
                        <span>github.com/carlaharumi</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nome</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Mensagem</label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Sua mensagem..."
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                      Enviar Mensagem
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Carla Harumi. Todos os direitos reservados.</p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:text-gray-300">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-gray-300">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-gray-300">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
