'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Users,
  Car,
  MapPin,
  Star,
  Shield,
  Bell,
  Database,
  Server,
  Code2,
  Layers,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  CheckCircle2,
  Cpu,
  HardDrive,
  Globe,
  Zap,
  Lock,
  Terminal,
  FileJson,
  User,
  CarFront,
  Route,
  MessageSquare,
  BellRing
} from 'lucide-react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = ['hero', 'about', 'architecture', 'features', 'database', 'api', 'techstack', 'screenshots', 'highlights']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const features = [
    {
      icon: Users,
      title: 'User Management',
      description: 'Register and manage user accounts with secure authentication. Users can create profiles, update information, and manage their ride history.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Car,
      title: 'Driver Management',
      description: 'Drivers can register, accept rides, and manage their availability. Complete driver onboarding with vehicle information and verification.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Ride Booking',
      description: 'Users can request rides with pickup and drop-off locations. Real-time ride tracking and status updates throughout the journey.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Star,
      title: 'Reviews & Ratings',
      description: 'Users can review drivers and provide ratings after each ride. Build trust and maintain quality service through feedback system.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Secure APIs',
      description: 'Spring Security implementation for authentication and authorization. JWT-based token authentication for secure API access.',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'System notifications for ride updates, driver assignments, and important alerts. Keep users informed about their ride status.',
      color: 'from-indigo-500 to-violet-500'
    }
  ]

  const databaseEntities = [
    {
      icon: User,
      name: 'User',
      description: 'Stores user information including name, email, phone number, and authentication credentials. Tracks user ride history and preferences.',
      fields: ['id', 'name', 'email', 'phone', 'password', 'createdAt']
    },
    {
      icon: CarFront,
      name: 'Driver',
      description: 'Contains driver profiles with vehicle details, license information, availability status, and performance metrics.',
      fields: ['id', 'name', 'license', 'vehicle', 'rating', 'status']
    },
    {
      icon: Route,
      name: 'Ride',
      description: 'Records ride requests with pickup/drop-off locations, fare calculations, ride status, and timestamps.',
      fields: ['id', 'pickup', 'dropoff', 'fare', 'status', 'userId', 'driverId']
    },
    {
      icon: MessageSquare,
      name: 'Review',
      description: 'Stores user reviews and ratings for drivers after completed rides. Helps maintain service quality.',
      fields: ['id', 'rating', 'comment', 'userId', 'driverId', 'rideId']
    },
    {
      icon: BellRing,
      name: 'Notification',
      description: 'System notifications for ride updates, driver assignments, and alerts. Keeps users informed in real-time.',
      fields: ['id', 'message', 'type', 'read', 'userId', 'createdAt']
    }
  ]

  const apiEndpoints = [
    { method: 'GET', endpoint: '/api/rides', description: 'Get all rides' },
    { method: 'POST', endpoint: '/api/rides/request', description: 'Request a new ride' },
    { method: 'POST', endpoint: '/api/users/register', description: 'Register new user' },
    { method: 'POST', endpoint: '/api/drivers/register', description: 'Register new driver' },
    { method: 'POST', endpoint: '/api/reviews', description: 'Submit a review' },
    { method: 'GET', endpoint: '/api/drivers/available', description: 'Get available drivers' },
    { method: 'PUT', endpoint: '/api/rides/{id}/status', description: 'Update ride status' },
    { method: 'GET', endpoint: '/api/users/{id}/history', description: 'Get user ride history' }
  ]

  const techStack = [
    { name: 'Java', icon: '☕', description: 'Primary programming language' },
    { name: 'Spring Boot', icon: '🌱', description: 'Application framework' },
    { name: 'Spring Security', icon: '🔒', description: 'Authentication & authorization' },
    { name: 'MySQL', icon: '🐬', description: 'Relational database' },
    { name: 'REST APIs', icon: '🌐', description: 'API architecture' },
    { name: 'Postman', icon: '📮', description: 'API testing tool' }
  ]

  const highlights = [
    'Clean layered architecture',
    'Secure API endpoints',
    'RESTful API design',
    'MySQL database integration',
    'Backend tested using Postman',
    'Comprehensive error handling',
    'Input validation',
    'JWT authentication'
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">RideBooking</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {['about', 'features', 'architecture', 'api', 'techstack'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors capitalize ${activeSection === section ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  {section}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('hero')} size="sm" className="hidden sm:flex">
              View Demo
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 border-purple-500/50 text-purple-300 bg-purple-500/10 px-4 py-1">
            <Zap className="w-3 h-3 mr-2" />
            Backend Portfolio Project
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Ride Booking
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Backend System by Aniket Kumawat
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            A scalable backend system for a ride booking platform built using <span className="text-cyan-400 font-semibold">Java</span> and <span className="text-purple-400 font-semibold">Spring Boot</span> that enables users to request rides and drivers to manage ride assignments.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('features')}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-8 h-12 text-base font-semibold shadow-lg shadow-purple-500/25"
            >
              View API Features
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 h-12 text-base font-semibold"
            >
              <Github className="mr-2 w-4 h-4" />
              View GitHub Repository
            </Button>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="mt-16 text-slate-400 hover:text-white transition-colors animate-bounce"
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-indigo-500/50 text-indigo-600 dark:text-indigo-400 bg-indigo-500/10">
              About the Project
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Understanding the System
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive backend solution designed to handle the complexities of ride booking platforms.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  This project was built to simulate the backend of popular ride-sharing applications like <span className="font-semibold text-foreground">Uber</span> or <span className="font-semibold text-foreground">Ola</span>. The primary focus was on creating robust REST APIs, implementing secure authentication mechanisms, and designing an efficient database schema.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  The system follows Spring Boot best practices with a clean, maintainable architecture that separates concerns across different layers. This approach ensures scalability and makes the codebase easy to understand and extend.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  { icon: MapPin, text: 'Ride request management' },
                  { icon: Car, text: 'Driver assignment system' },
                  { icon: Star, text: 'Review and rating system' },
                  { icon: Lock, text: 'Secure API authentication' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border border-indigo-100 dark:border-indigo-800">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-20" />
              <Card className="relative border-2 border-indigo-100 dark:border-indigo-800 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="w-5 h-5 text-indigo-500" />
                    Project Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">Language</span>
                    <Badge variant="secondary">Java 17+</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">Framework</span>
                    <Badge variant="secondary">Spring Boot 3.x</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">Database</span>
                    <Badge variant="secondary">MySQL 8.x</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-muted-foreground">Security</span>
                    <Badge variant="secondary">Spring Security + JWT</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Architecture</span>
                    <Badge variant="secondary">Layered Architecture</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="py-24 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-emerald-500/50 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10">
              System Architecture
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Layered Architecture Design
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A clean separation of concerns following Spring Boot best practices for maintainable and scalable code.
            </p>
          </div>
          
          {/* Architecture Flow Diagram */}
          <div className="relative mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              {[
                { icon: Globe, label: 'Frontend', desc: 'Client Apps', color: 'from-blue-500 to-cyan-500' },
                { icon: Terminal, label: 'Controller', desc: 'REST Endpoints', color: 'from-green-500 to-emerald-500' },
                { icon: Cpu, label: 'Service', desc: 'Business Logic', color: 'from-purple-500 to-pink-500' },
                { icon: Database, label: 'Repository', desc: 'Data Access', color: 'from-orange-500 to-red-500' },
                { icon: HardDrive, label: 'MySQL', desc: 'Database', color: 'from-indigo-500 to-violet-500' }
              ].map((item, index, arr) => (
                <div key={index} className="flex items-center gap-4 md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-3 transform hover:scale-105 transition-transform`}>
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <span className="font-bold text-lg">{item.label}</span>
                    <span className="text-sm text-muted-foreground">{item.desc}</span>
                  </div>
                  {index < arr.length - 1 && (
                    <ArrowRight className="hidden md:block w-6 h-6 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Layer Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Controller Layer',
                icon: Terminal,
                description: 'Handles HTTP requests and responses. Defines REST endpoints and validates input data before passing to the service layer.',
                responsibilities: ['REST endpoint definition', 'Request validation', 'Response formatting', 'Error handling']
              },
              {
                title: 'Service Layer',
                icon: Cpu,
                description: 'Contains business logic and orchestrates data flow. Processes requests, applies business rules, and coordinates transactions.',
                responsibilities: ['Business logic', 'Transaction management', 'Data transformation', 'Service orchestration']
              },
              {
                title: 'Repository Layer',
                icon: Database,
                description: 'Manages data persistence and retrieval. Uses Spring Data JPA for database operations with custom query support.',
                responsibilities: ['CRUD operations', 'Custom queries', 'Data mapping', 'Connection management']
              },
              {
                title: 'Database Layer',
                icon: HardDrive,
                description: 'MySQL database for persistent storage. Stores user data, ride information, reviews, and system notifications.',
                responsibilities: ['Data persistence', 'Indexing', 'Constraints', 'Relationships']
              }
            ].map((layer, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-t-4 border-t-indigo-500">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <layer.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{layer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{layer.description}</p>
                  <ul className="space-y-2">
                    {layer.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-cyan-500/50 text-cyan-600 dark:text-cyan-400 bg-cyan-500/10">
              Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Powerful Backend Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive set of features designed for modern ride booking platforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 bg-white dark:bg-slate-800 shadow-md">
                <div className={`h-2 bg-gradient-to-r ${feature.color}`} />
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Database Section */}
      <section id="database" className="py-24 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-orange-500/50 text-orange-600 dark:text-orange-400 bg-orange-500/10">
              Database Design
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Entity Relationship Model
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Well-structured database entities with clear relationships and optimized queries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {databaseEntities.map((entity, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-t-4 border-t-orange-500">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <entity.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{entity.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{entity.description}</p>
                  <div className="space-y-1">
                    {entity.fields.map((field, i) => (
                      <code key={i} className="block text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded font-mono">
                        {field}
                      </code>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints Section */}
      <section id="api" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-green-500/50 text-green-400 bg-green-500/10">
              API Endpoints
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              RESTful API Design
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Well-documented REST endpoints following best practices. All APIs tested using Postman.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Code2 className="w-5 h-5 text-green-400" />
                  Sample Endpoints
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Core API endpoints for the ride booking system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {apiEndpoints.map((api, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/50 hover:bg-slate-900 transition-colors">
                      <Badge className={`${api.method === 'GET' ? 'bg-blue-500' : api.method === 'POST' ? 'bg-green-500' : 'bg-orange-500'} text-white font-mono text-xs`}>
                        {api.method}
                      </Badge>
                      <code className="text-sm font-mono text-cyan-400 flex-1">{api.endpoint}</code>
                      <span className="text-xs text-slate-500 hidden sm:inline">{api.description}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <FileJson className="w-5 h-5 text-yellow-400" />
                  Example Response
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Sample JSON response from ride endpoint
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto text-sm">
                  <code className="text-slate-300">{`{
  "id": 1,
  "pickup": "123 Main Street",
  "dropoff": "456 Oak Avenue",
  "fare": 15.50,
  "status": "IN_PROGRESS",
  "user": {
    "id": 1,
    "name": "John Doe"
  },
  "driver": {
    "id": 1,
    "name": "Jane Smith",
    "vehicle": "Toyota Camry"
  },
  "createdAt": "2024-01-15T10:30:00"
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            <Badge variant="outline" className="border-orange-500/50 text-orange-400 bg-orange-500/10">
              <span className="mr-2">📮</span>
              Tested with Postman
            </Badge>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="techstack" className="py-24 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-violet-500/50 text-violet-600 dark:text-violet-400 bg-violet-500/10">
              Tech Stack
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technologies Used
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern and battle-tested technologies for building robust backend systems.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <h3 className="font-bold mb-1">{tech.name}</h3>
                  <p className="text-xs text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-pink-500/50 text-pink-600 dark:text-pink-400 bg-pink-500/10">
              Screenshots
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              API Testing & Demo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Screenshots from Postman API testing and system flow demonstrations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'User Registration API', desc: 'POST /api/users/register endpoint testing in Postman' },
              { title: 'Ride Request Flow', desc: 'Complete ride booking flow demonstration' },
              { title: 'Driver Assignment', desc: 'Driver accepting ride assignment' },
              { title: 'Review Submission', desc: 'POST /api/reviews endpoint for driver reviews' },
              { title: 'Database Schema', desc: 'MySQL database entity relationships' },
              { title: 'API Response', desc: 'Sample JSON response from ride endpoint' }
            ].map((screenshot, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/80 dark:bg-slate-800/80 flex items-center justify-center shadow-lg">
                      <ExternalLink className="w-8 h-8 text-purple-500" />
                    </div>
                    <p className="text-sm text-muted-foreground">Screenshot Placeholder</p>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-1">{screenshot.title}</h3>
                  <p className="text-sm text-muted-foreground">{screenshot.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-white/30 text-white bg-white/10">
              Project Highlights
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
              Key Achievements
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              What makes this project stand out from the rest.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <p className="font-medium text-white text-lg">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">Ride Booking Backend System</span>
            </div>
            <p className="text-slate-400 max-w-md mx-auto">
              A portfolio project showcasing backend development skills with Java and Spring Boot.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 gap-2" asChild>
              <a href="https://github.com/aniketkumawat" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 gap-2" asChild>
              <a href="https://linkedin.com/in/aniketkumawat" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 gap-2" asChild>
              <a href="mailto:aniket.kumawat@example.com">
                <Mail className="w-5 h-5" />
                Email
              </a>
            </Button>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-400">
              Developed by <span className="font-semibold text-white">Aniket Kumawat</span>
            </p>
            <p className="text-sm text-slate-500 mt-2">
              &copy; {new Date().getFullYear()} Ride Booking Backend System. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
