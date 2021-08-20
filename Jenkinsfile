pipeline {
    agent any 
    
    stages {
	
	stage('Npm install') {
            steps {
               bat 'npm install'
            }
        }
	
	
        stage('module 1 tests') {
            steps {
               bat 'npm run test:module-1'
            }
        }
		
		stage('module 2 tests') {
            steps {
               bat 'npm run test:module-2'
            }
        }
		
		stage('module 3 tests') {
            steps {
               bat 'npm run test:module-3'
            }
        }
		
		stage('module 4 tests') {
            steps {
               bat 'npm run test:module-4'
            }
        }
		
		
        
		
		stage('module plus tests') {
            steps {
               bat 'npm run test:plus'
            }
        }
       
	   
	   
	   }
}