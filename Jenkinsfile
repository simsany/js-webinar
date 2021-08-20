pipeline {
    agent any 
    
    stages {
	
	stage('Stati') {
            steps {
               bat 'npm install'
            }
        }
	
	
        stage('Static Analysis') {
            steps {
               bat 'npm run test:module-1'
            }
        }
       }
}