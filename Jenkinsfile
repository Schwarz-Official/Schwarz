pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: '*/master'], [name: '*/develop'], [name: 'feature/*'], [name: 'hotfix/*']], userRemoteConfigs: [[url: 'https://github.com/Schwarz-Official/Schwarz.git']]])
      }
    }

    stage('Dockerize') {
      when {
        branch 'master'
      }
      steps {
        sh "docker build -t dev-ap-south-1-code:latest ."
      }
    }

    stage('Push to ECR') {
      when {
        branch 'master'
      }
      steps {
        withAWS(credentials: 'a4dda75a-f563-4005-bf16-560ba051f493', region: 'us-east-1') {
          sh 'aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/k5g3y6d4'
          sh 'docker tag dev-ap-south-1-code:latest public.ecr.aws/k5g3y6d4/dev-ap-south-1-code:latest'
          sh 'docker push public.ecr.aws/k5g3y6d4/dev-ap-south-1-code:latest'
        }

      }
    }

//     stage('Deploy to EKS') {
//       when {
//         branch 'master'
//       }
//       steps {
//         script {
//           withAWS(credentials: 'a4dda75a-f563-4005-bf16-560ba051f493', region: 'ap-south-1') {
//             script {
//               sh ('aws eks update-kubeconfig --name dev-ap-south-1-schwarz --region ap-south-1')
//               sh "kubectl apply -f config.yaml"
//             }
//           }
//         }
//
//       }
//     }
  }
}