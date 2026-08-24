pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code from GitHub...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                bat 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running React tests...'
                bat 'npm test -- --run'
            }
        }

        stage('Build React Application') {
            steps {
                echo 'Building React application...'
                bat 'npm run build'
            }
        }
    }

    post {

        success {
            echo '======================================'
            echo 'CI PIPELINE SUCCESSFUL'
            echo '======================================'
        }

        failure {
            echo '======================================'
            echo 'CI PIPELINE FAILED'
            echo '======================================'
        }
    }
}