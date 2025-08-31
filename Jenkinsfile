@Library('mylib') _

pipeline {
    agent { label "agentdev"}

    stages{
        stage('Hello') {
            steps {
                script {
                    hello()
                }
            }
        }
        stage('Checkout Code') {
            steps {
                script {
                code_check("https://github.com/dev9913/Mood-App-React.git",  "main")
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    imagebuild("mymoodapp","latest","dev7878")
                }
            }
        }
        stage('Docker push') {
            steps{
                script{
                    dockerpush("mymoodapp","latest","dev7878")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                // Enter the imageNAme , Tag , and Port no. 
              script {
                    runnigImage("mymoodapp","latest",3000)
                }
            }
        }
    }
}
