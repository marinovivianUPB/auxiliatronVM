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
                sh 'cd client/admin && npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'cd client/admin && npm run test' 
            }
        }
        stage('Test e2e') {
            parallel {
                steps {
                    sh 'cd client/admin && npm run e2e'
                }
                steps {
                    sh 'cd client/admin && npm run dev'
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}