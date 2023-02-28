pipeline{
    
    agent any 
    
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
        stage('Push docker image'){
            
            steps{
                
                script{
                    withDockerRegistry([ credentialsId: "dockerhub", url: "" ])
                    dockerImage.push()
                }
            }
        }
            
        }
        
}