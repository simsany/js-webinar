pipeline {
    agent any 
    
    stages {
	
	stage('Npm install') {
            steps {
               bat 'npm install'
            }
        }
	
	
        stage('module 1 tests') {
            when {changeset "module-1/**"}


            steps {
               bat 'npm run test:module-1'
            }
        }
		
		stage('module 2 tests') {
             when {changeset "module-2/**"}
            steps {
               bat 'npm run test:module-2'
            }
        }
		
		stage('module 3 tests') {
             when {changeset "module-3/**"}
            steps {
               bat 'npm run test:module-3'
            }
        }
		
		stage('module 4 tests') {
             when {changeset "module-4/**"}
            steps {
               bat 'npm run test:module-4'
            }
        }
		
		
        
		
		stage('module plus tests') {
             when {changeset "plus/**"}
            steps {
               bat 'npm run test:plus'
            }
        }
       
	   
	   
	   }
}