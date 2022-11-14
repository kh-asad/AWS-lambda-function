import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class Sprint1AsadStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const hw_lambda=this.create_lambda("MyFirstTSLambda", "hw_lambda.handler","./resources")

    // example resource
    // const queue = new sqs.Queue(this, 'Sprint1AsadQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
  create_lambda(id: string, handler: string, path: string){
    return new lambda.Function(this, 'AsadFunction', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: handler,
      code: lambda.Code.fromAsset(path)});
    }
}
