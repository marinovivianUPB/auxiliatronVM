pipeline {
    agent any
    tools {
        nodejs 'node 20'
    }
    stages {
        stage('Dependencies') {
            steps {
                sh 'cd client/admin && npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'cd client/admin'
            }
        }
        stage('Test') {
            steps {
                sh 'cd client/admin && npm run test' 
            }
        }
        stage('Test e2e') {
            steps {
               sh 'cd client/admin && npm run e2e'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}