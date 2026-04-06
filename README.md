<h2>⚙️ Using Tools </h2>

<p align="center">

<!-- AWS -->
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" width="60" height="60"/>

<!-- Docker -->
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="60" height="60"/>

<!-- Jenkins -->
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" width="60" height="60"/>

<!-- Linux -->
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" width="60" height="60"/>

<!-- Git -->
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="60" height="60"/>

<!-- GitHub -->
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="60" height="60"/>

</p>

<div class="container">

<h1>Jenkins CI/CD Pipeline with AWS EC2 and Docker</h1>

<p>
This project demonstrates a complete CI/CD pipeline using Jenkins, GitHub, AWS EC2, Node.js and Docker.
The pipeline automatically builds and deploys the application when code is pushed to GitHub.
</p>

<h2>Architecture</h2>

<pre>
Developer
   │
   ▼
GitHub Repository
   │
   ▼
Webhook Trigger
   │
   ▼
Jenkins Server
   │
   ▼
Jenkins Agent (AWS EC2)
   │
   ├ Install Dependencies
   ├ Build Node Application
   ├ Build Docker Image
   └ Run Container
   ▼
Application Running
</pre>

<h2>Technologies Used</h2>

<ul>
<li>GitHub</li>
<li>Jenkins</li>
<li>AWS EC2</li>
<li>Docker</li>
<li>Node.js</li>
<li>NPM</li>
</ul>

<h2>Step 1 – Launch AWS EC2 Instance</h2>

<pre>
AMI: Ubuntu
Instance Type: t2.micro

Security Ports

22   SSH
8080 Jenkins
80   Web Application
</pre>

<h2>Step 2 – Install Required Software</h2>

<pre>
sudo apt update
sudo apt install openjdk-21-jdk -y
sudo apt install nodejs npm -y
sudo apt install docker.io -y
</pre>

<h2>Step 3 – Configure Jenkins Agent</h2>

<p>Go to Jenkins dashboard and create a new node.</p>

<pre>
Manage Jenkins
Manage Nodes
New Node
</pre>

<pre>
Node Name: ec2-agent
Labels: selvaa
Launch Method: SSH
</pre>

<h2>Step 4 – Configure GitHub Webhook</h2>

<pre>
Settings
Webhooks
Add Webhook
</pre>

<pre>
Payload URL
http://JENKINS-IP:8080/github-webhook/

Content Type
application/json
</pre>

<h2>Step 5 – Jenkins Pipeline Code</h2>

<pre>
pipeline {
 agent { label 'selvaa' }

 stages {

  stage('Clone Repository') {
   steps {
    git branch: 'main',
    url: 'https://github.com/Vickyvky13/JenkinsCICD.git'
   }
  }

  stage('Clean Workspace') {
   steps {
    sh '''
    rm -rf node_modules
    rm -f package-lock.json
    '''
   }
  }

  stage('Install Dependencies') {
   steps {
    sh 'npm install'
   }
  }

  stage('Build Website') {
   steps {
    sh 'npm run build'
   }
  }

  stage('Remove Old Container') {
   steps {
    sh '''
    docker stop jenkins-demo || true
    docker rm jenkins-demo || true
    docker rmi jenkins-demo || true
    '''
   }
  }

  stage('Build Docker Image') {
   steps {
    sh 'docker build -t jenkins-demo .'
   }
  }

  stage('Run Container') {
   steps {
    sh 'docker run -d -p 80:80 --name jenkins-demo jenkins-demo'
   }
  }

 }
}
</pre>

<h2>Pipeline Workflow</h2>

<pre>
1 Developer pushes code
2 GitHub webhook triggers Jenkins
3 Jenkins clones repository
4 Dependencies installed
5 Application build
6 Docker image created
7 Container deployed
8 Application live on EC2
</pre>

<h2>Access Application</h2>

<pre>
http://EC2-PUBLIC-IP
</pre>

</div>

</body>
</html>
