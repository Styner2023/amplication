/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { VersionWhereUniqueInput } from "../../version/base/VersionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class VersionUpdateManyWithoutGeneratorsInput {
  @Field(() => [VersionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VersionWhereUniqueInput],
  })
  connect?: Array<VersionWhereUniqueInput>;

  @Field(() => [VersionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VersionWhereUniqueInput],
  })
  disconnect?: Array<VersionWhereUniqueInput>;

  @Field(() => [VersionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [VersionWhereUniqueInput],
  })
  set?: Array<VersionWhereUniqueInput>;
}

export { VersionUpdateManyWithoutGeneratorsInput as VersionUpdateManyWithoutGeneratorsInput };