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
                    
                    docker build -t "mywebsite:1.1" 
                }
            }
        }
        // stage('Push docker image'){
            
        //     steps{
                
        //         script{
        //             docker commit "$(docker ps -lq)" "mywebsite:1.1"
        //             docker login "https://portal.demo365.info"
        //             docker tag "mywebsite:1.1" "portal.demo365.info/mywebsite:1.1"
        //             docker push "portal.demo365.info/mywebsite:1.1"
        //         }
        //     }
        // }
            
        }
        
}