pipeline {
    agent any 
    tools {nodejs "node"}
    stages {
        stage('Static Analysis') {
            steps {
               sh 'npm run test:module-1'
            }
        }
       }
}