pipeline{
    
    agent any 
     environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
  }
    stages {
        
        stage('Git Checkout'){
            
            steps{
                
                script{
                    
                    git branch: 'main', url: 'https://github.com/minhphuc2k21/HyunA-Ink.git'
                }
            }
        }
        stage('Build docker image'){
            
            steps{
                
                script{
                    
                     sh 'docker build -t phuctranminh/hyunah-ink:v1.0 .'
                }
            }
        }
        stage('Login Docker Registry'){
            
            steps{
                
                script{
                    
                      sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                }
            }
        }

        stage('Push docker image'){
            
            steps{
                  sh 'docker push phuctranminh/hyunah-ink:v1.0'
               
            }
        }
        } 
        post{
            always{
                mail bcc: '', body: 'Success', cc: '', from: '', replyTo: '', subject: 'Test mail jenkins', to: 'phuctranminh1612@gmail.com'
            }
        }
    
}