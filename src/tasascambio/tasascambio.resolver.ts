import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TasascambioService } from './tasascambio.service';
import { TasasCambio } from './entities/tasascambio.entity';
import { CreateTasascambioInput } from './dto/create-tasascambio.input';
import { UpdateTasacambioInput } from './dto/update-tasascambio.input';

@Resolver(() => TasasCambio)
export class TasascambioResolver {
  constructor(private readonly tasascambioService: TasascambioService) {}

  @Query(() => [TasasCambio], { name: 'findAll' })
  findAll() {
    return this.tasascambioService.findAll();
  }

  @Query(() => [TasasCambio], { name: 'tasasdecambio' })
  findRates(@Args('FECHATASA', { type: () => Date }) FECHATASA: Date) {
    return this.tasascambioService.findRates(FECHATASA);
  }

  @Mutation(() => TasasCambio)
  updateTasasCambio(@Args('updateTasasCambioInput') updateTasasCambioInput: UpdateTasacambioInput) {
    return this.tasascambioService.update(updateTasasCambioInput.id, updateTasasCambioInput);
  }

  @Mutation(() => TasasCambio)
  removeTasasCambio(@Args('id', { type: () => Int }) id: number) {
    return this.tasascambioService.remove(id);
  }
}
