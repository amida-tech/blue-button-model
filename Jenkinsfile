pipeline {
  agent {
    docker {
      image 'node:18.20.1-alpine3.19'
    }
  }
  stages {
    stage('Sanity Check') {
      steps {
        echo 'Node installation check...'
        sh 'node --version'
      }
    }
    stage('Setup') {
      steps {
        echo 'Cloning repo...'
        git branch: 'OSI-44-routine-maintenance', url: 'https://github.com/amida-tech/blue-button-model.git'
      }
    }
    stage('Build') {
      steps {
        echo 'Installing dependencies...'
        sh 'npm i'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing...'
        sh 'npm test'
      }
    }
  }
}